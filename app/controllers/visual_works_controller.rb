class VisualWorksController < ApplicationController
  before_action :set_visual_work, only: %i[ show edit update destroy ]

  # GET /visual_works or /visual_works.json
  def index
    # Retrieve expensive and cheap products
    landscape = VisualWork.where(orientation: 'col-span-3').order("RANDOM()")
    portrait = VisualWork.where(orientation: 'col-span-2').order("RANDOM()")


    # Interleave
    @visual_works = landscape.zip(portrait).flatten.compact

    # filter by medium

    if params[:medium].present?
      @visual_works = @visual_works.select { |work| work.medium.downcase.include?(params[:medium].downcase) }
    end

  end


  # GET /visual_works/1 or /visual_works/1.json
  def show
    require "rqrcode"
    qr_code = RQRCode::QRCode.new(visual_work_url(@visual_work))
    @qr_code = qr_code.as_svg(
      viewbox: '0 0 100 100',
      color: "000",
      shape_rendering: "crispEdges",
      module_size: 6,
      standalone: true,
      use_path: true
    )
  end

  # GET /visual_works/new
  def new
    @visual_work = VisualWork.new
  end

  # GET /visual_works/1/edit
  def edit
    @visual_work.medium = JSON.parse(@visual_work.medium).join(", ")
  end

  # POST /visual_works or /visual_works.json
  def create
    @visual_work = VisualWork.new(visual_work_params)

    respond_to do |format|
      if @visual_work.save
        format.html { redirect_to visual_work_url(@visual_work), notice: "Visual work was successfully created." }
        format.json { render :show, status: :created, location: @visual_work }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @visual_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visual_works/1 or /visual_works/1.json
  def update
    respond_to do |format|
      if @visual_work.update(visual_work_params)
        format.html { redirect_to visual_work_url(@visual_work), notice: "Visual work was successfully updated." }
        format.json { render :show, status: :ok, location: @visual_work }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @visual_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visual_works/1 or /visual_works/1.json
  def destroy
    @visual_work.destroy

    respond_to do |format|
      format.html { redirect_to visual_works_url, notice: "Visual work was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visual_work
      @visual_work = VisualWork.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def visual_work_params
      params.require(:visual_work).permit(:artist_id, :artwork, :title, :medium, :description, :orientation, :audio_description)
    end
end

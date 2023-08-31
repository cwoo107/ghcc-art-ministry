class MusicalWorksController < ApplicationController
  before_action :set_musical_work, only: %i[ show edit update destroy ]

  # GET /musical_works or /musical_works.json
  def index
    @musical_works = MusicalWork.all
  end

  # GET /musical_works/1 or /musical_works/1.json
  def show
  end

  # GET /musical_works/new
  def new
    @musical_work = MusicalWork.new
  end

  # GET /musical_works/1/edit
  def edit
  end

  # POST /musical_works or /musical_works.json
  def create
    @musical_work = MusicalWork.new(musical_work_params)

    respond_to do |format|
      if @musical_work.save
        format.html { redirect_to musical_work_url(@musical_work), notice: "Musical work was successfully created." }
        format.json { render :show, status: :created, location: @musical_work }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @musical_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /musical_works/1 or /musical_works/1.json
  def update
    respond_to do |format|
      if @musical_work.update(musical_work_params)
        format.html { redirect_to musical_work_url(@musical_work), notice: "Musical work was successfully updated." }
        format.json { render :show, status: :ok, location: @musical_work }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @musical_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /musical_works/1 or /musical_works/1.json
  def destroy
    @musical_work.destroy

    respond_to do |format|
      format.html { redirect_to musical_works_url, notice: "Musical work was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_musical_work
      @musical_work = MusicalWork.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def musical_work_params
      params.require(:musical_work).permit(:artist_id, :title, :sheet_music, :iframe, :description)
    end
end

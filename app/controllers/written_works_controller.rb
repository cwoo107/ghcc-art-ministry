class WrittenWorksController < ApplicationController
  before_action :set_written_work, only: %i[ show edit update destroy ]

  # GET /written_works or /written_works.json
  def index
    @written_works = WrittenWork.all
  end

  # GET /written_works/1 or /written_works/1.json
  def show
  end

  # GET /written_works/new
  def new
    @written_work = WrittenWork.new
  end

  # GET /written_works/1/edit
  def edit
  end

  # POST /written_works or /written_works.json
  def create
    @written_work = WrittenWork.new(written_work_params)

    respond_to do |format|
      if @written_work.save
        format.html { redirect_to written_work_url(@written_work), notice: "Written work was successfully created." }
        format.json { render :show, status: :created, location: @written_work }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @written_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /written_works/1 or /written_works/1.json
  def update
    respond_to do |format|
      if @written_work.update(written_work_params)
        format.html { redirect_to written_work_url(@written_work), notice: "Written work was successfully updated." }
        format.json { render :show, status: :ok, location: @written_work }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @written_work.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /written_works/1 or /written_works/1.json
  def destroy
    @written_work.destroy

    respond_to do |format|
      format.html { redirect_to written_works_url, notice: "Written work was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_written_work
      @written_work = WrittenWork.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def written_work_params
      params.require(:written_work).permit(:artist_id, :genre, :title, :description, :content)
    end
end

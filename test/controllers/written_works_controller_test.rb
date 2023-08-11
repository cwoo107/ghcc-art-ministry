require "test_helper"

class WrittenWorksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @written_work = written_works(:one)
  end

  test "should get index" do
    get written_works_url
    assert_response :success
  end

  test "should get new" do
    get new_written_work_url
    assert_response :success
  end

  test "should create written_work" do
    assert_difference("WrittenWork.count") do
      post written_works_url, params: { written_work: { artist_id: @written_work.artist_id, description: @written_work.description, genre: @written_work.genre, title: @written_work.title } }
    end

    assert_redirected_to written_work_url(WrittenWork.last)
  end

  test "should show written_work" do
    get written_work_url(@written_work)
    assert_response :success
  end

  test "should get edit" do
    get edit_written_work_url(@written_work)
    assert_response :success
  end

  test "should update written_work" do
    patch written_work_url(@written_work), params: { written_work: { artist_id: @written_work.artist_id, description: @written_work.description, genre: @written_work.genre, title: @written_work.title } }
    assert_redirected_to written_work_url(@written_work)
  end

  test "should destroy written_work" do
    assert_difference("WrittenWork.count", -1) do
      delete written_work_url(@written_work)
    end

    assert_redirected_to written_works_url
  end
end

require "test_helper"

class VisualWorksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @visual_work = visual_works(:one)
  end

  test "should get index" do
    get visual_works_url
    assert_response :success
  end

  test "should get new" do
    get new_visual_work_url
    assert_response :success
  end

  test "should create visual_work" do
    assert_difference("VisualWork.count") do
      post visual_works_url, params: { visual_work: { artist_id: @visual_work.artist_id, artwork: @visual_work.artwork, description: @visual_work.description, medium: @visual_work.medium, title: @visual_work.title } }
    end

    assert_redirected_to visual_work_url(VisualWork.last)
  end

  test "should show visual_work" do
    get visual_work_url(@visual_work)
    assert_response :success
  end

  test "should get edit" do
    get edit_visual_work_url(@visual_work)
    assert_response :success
  end

  test "should update visual_work" do
    patch visual_work_url(@visual_work), params: { visual_work: { artist_id: @visual_work.artist_id, artwork: @visual_work.artwork, description: @visual_work.description, medium: @visual_work.medium, title: @visual_work.title } }
    assert_redirected_to visual_work_url(@visual_work)
  end

  test "should destroy visual_work" do
    assert_difference("VisualWork.count", -1) do
      delete visual_work_url(@visual_work)
    end

    assert_redirected_to visual_works_url
  end
end

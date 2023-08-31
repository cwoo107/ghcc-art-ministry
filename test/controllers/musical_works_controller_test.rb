require "test_helper"

class MusicalWorksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @musical_work = musical_works(:one)
  end

  test "should get index" do
    get musical_works_url
    assert_response :success
  end

  test "should get new" do
    get new_musical_work_url
    assert_response :success
  end

  test "should create musical_work" do
    assert_difference("MusicalWork.count") do
      post musical_works_url, params: { musical_work: { artist_id: @musical_work.artist_id, iframe: @musical_work.iframe, sheet_music: @musical_work.sheet_music, title: @musical_work.title } }
    end

    assert_redirected_to musical_work_url(MusicalWork.last)
  end

  test "should show musical_work" do
    get musical_work_url(@musical_work)
    assert_response :success
  end

  test "should get edit" do
    get edit_musical_work_url(@musical_work)
    assert_response :success
  end

  test "should update musical_work" do
    patch musical_work_url(@musical_work), params: { musical_work: { artist_id: @musical_work.artist_id, iframe: @musical_work.iframe, sheet_music: @musical_work.sheet_music, title: @musical_work.title } }
    assert_redirected_to musical_work_url(@musical_work)
  end

  test "should destroy musical_work" do
    assert_difference("MusicalWork.count", -1) do
      delete musical_work_url(@musical_work)
    end

    assert_redirected_to musical_works_url
  end
end

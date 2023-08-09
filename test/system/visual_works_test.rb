require "application_system_test_case"

class VisualWorksTest < ApplicationSystemTestCase
  setup do
    @visual_work = visual_works(:one)
  end

  test "visiting the index" do
    visit visual_works_url
    assert_selector "h1", text: "Visual works"
  end

  test "should create visual work" do
    visit visual_works_url
    click_on "New visual work"

    fill_in "Artist", with: @visual_work.artist_id
    fill_in "Artwork", with: @visual_work.artwork
    fill_in "Description", with: @visual_work.description
    fill_in "Medium", with: @visual_work.medium
    fill_in "Title", with: @visual_work.title
    click_on "Create Visual work"

    assert_text "Visual work was successfully created"
    click_on "Back"
  end

  test "should update Visual work" do
    visit visual_work_url(@visual_work)
    click_on "Edit this visual work", match: :first

    fill_in "Artist", with: @visual_work.artist_id
    fill_in "Artwork", with: @visual_work.artwork
    fill_in "Description", with: @visual_work.description
    fill_in "Medium", with: @visual_work.medium
    fill_in "Title", with: @visual_work.title
    click_on "Update Visual work"

    assert_text "Visual work was successfully updated"
    click_on "Back"
  end

  test "should destroy Visual work" do
    visit visual_work_url(@visual_work)
    click_on "Destroy this visual work", match: :first

    assert_text "Visual work was successfully destroyed"
  end
end

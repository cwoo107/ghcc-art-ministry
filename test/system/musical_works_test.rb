require "application_system_test_case"

class MusicalWorksTest < ApplicationSystemTestCase
  setup do
    @musical_work = musical_works(:one)
  end

  test "visiting the index" do
    visit musical_works_url
    assert_selector "h1", text: "Musical works"
  end

  test "should create musical work" do
    visit musical_works_url
    click_on "New musical work"

    fill_in "Artist", with: @musical_work.artist_id
    fill_in "Iframe", with: @musical_work.iframe
    fill_in "Sheet music", with: @musical_work.sheet_music
    fill_in "Title", with: @musical_work.title
    click_on "Create Musical work"

    assert_text "Musical work was successfully created"
    click_on "Back"
  end

  test "should update Musical work" do
    visit musical_work_url(@musical_work)
    click_on "Edit this musical work", match: :first

    fill_in "Artist", with: @musical_work.artist_id
    fill_in "Iframe", with: @musical_work.iframe
    fill_in "Sheet music", with: @musical_work.sheet_music
    fill_in "Title", with: @musical_work.title
    click_on "Update Musical work"

    assert_text "Musical work was successfully updated"
    click_on "Back"
  end

  test "should destroy Musical work" do
    visit musical_work_url(@musical_work)
    click_on "Destroy this musical work", match: :first

    assert_text "Musical work was successfully destroyed"
  end
end

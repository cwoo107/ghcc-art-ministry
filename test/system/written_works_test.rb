require "application_system_test_case"

class WrittenWorksTest < ApplicationSystemTestCase
  setup do
    @written_work = written_works(:one)
  end

  test "visiting the index" do
    visit written_works_url
    assert_selector "h1", text: "Written works"
  end

  test "should create written work" do
    visit written_works_url
    click_on "New written work"

    fill_in "Artist", with: @written_work.artist_id
    fill_in "Description", with: @written_work.description
    fill_in "Genre", with: @written_work.genre
    fill_in "Title", with: @written_work.title
    click_on "Create Written work"

    assert_text "Written work was successfully created"
    click_on "Back"
  end

  test "should update Written work" do
    visit written_work_url(@written_work)
    click_on "Edit this written work", match: :first

    fill_in "Artist", with: @written_work.artist_id
    fill_in "Description", with: @written_work.description
    fill_in "Genre", with: @written_work.genre
    fill_in "Title", with: @written_work.title
    click_on "Update Written work"

    assert_text "Written work was successfully updated"
    click_on "Back"
  end

  test "should destroy Written work" do
    visit written_work_url(@written_work)
    click_on "Destroy this written work", match: :first

    assert_text "Written work was successfully destroyed"
  end
end

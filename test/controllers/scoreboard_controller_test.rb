require "test_helper"

class ScoreboardControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get scoreboard_new_url
    assert_response :success
  end
end

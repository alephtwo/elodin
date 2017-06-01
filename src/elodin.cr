require "./elodin/version"
require "./elodin/words/adjectives"
require "./elodin/words/nouns"

module Elodin
  def self.generate_name
    [ADJECTIVES, NOUNS].map(&.sample).map(&.capitalize).join(" ")
  end

  puts generate_name
end

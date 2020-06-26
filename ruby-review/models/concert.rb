class Concert
    attr_reader :fan, :rockstar
    attr_accessor :rating

    @@all = []

    def initialize(fan, rockstar, rating)
        @fan = fan
        @rockstar = rockstar
        @rating = rating

        @@all << self
    end

    def self.all
        @@all
    end

    def self.highest_rated_concert
        # @@all.max_by do |concert| 
        #     concert.rating
        # end

        sorted_concerts = self.all.sort_by do |concert|
            concert.rating
        end

        sorted_concerts.last
    end
end
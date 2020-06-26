class Rockstar
    attr_reader :instrument
    attr_accessor :name

    @@all = []

    def initialize(name, instrument)
        @name = name
        @instrument = instrument

        @@all << self
    end

    def self.all 
        @@all
    end

    def self.rockstar_first_names
        self.all.map do |rockstar|
            rockstar.name
        end
    end

    def my_concerts
        # first step: Grab all concerts...an array
            #Concert.all
        # second step: Check each concert for rockstar name
        Concert.all.select do |concert|
            concert.rockstar.name == "Haley"
        end
        # third step: compare name to "Haley"
    end

    def my_fans
        fan_instances = my_concerts.map do |concert|
            concert.fan.name
        end
    end
end
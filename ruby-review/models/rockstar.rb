class Rockstar
    attr_reader :name, :instrument

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

    def fan
        
    end
end
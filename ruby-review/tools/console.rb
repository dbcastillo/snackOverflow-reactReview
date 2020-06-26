require 'pry'

require_relative '../models/concert.rb'
require_relative '../models/fan.rb'
require_relative '../models/rockstar.rb'

def reload
    load 'config/environment.rb'
end

derick = Rockstar.new("Derick", "guitar")
haley = Rockstar.new("Haley", "guitar")
seth = Rockstar.new("Seth", "banjo")
josue = Rockstar.new("Josue", "spoons")

burt = Fan.new("Burt", 5)
hurt = Fan.new("hurt", 6)
slurt = Fan.new("Slurt", 3)
kurt = Fan.new("kurt", 9)

one = Concert.new(burt, derick)
two = Concert.new(hurt, haley)
three = Concert.new(slurt, seth)
four = Concert.new(kurt, josue)

binding.pry
0
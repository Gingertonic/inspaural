# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Beti", email: "thegingertonicstudios@gmail.com", password: "test", password_confirmation: "test")
User.create(name: "Aki", email: "al@gakovic.com", password: "password", password_confirmation: "password")

bridge = Quote.create(author: "James Brown", text: "Take it to the bridge", audioUrl: "www.test.com/bridge.mp3")
yes = Quote.create(author: "Barack Obama", text: "Yes we can", audioUrl: "www.test.com/yes.mp3")
heart = Quote.create(author: "Celine Dion", text: "The heart does go on", audioUrl: "www.test.com/go-on")

Ambience.create(name: "funk", audioUrl: "www.test.com/funk")
Ambience.create(name: "love", audioUrl: "www.test.com/love")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity")
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Loving time")

loveInsp.quotes << heart
soulInsp.quotes << bridge
soulInsp.quotes << yes

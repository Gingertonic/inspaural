# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
testImage = "https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"

User.create(name: "Beti", email: "thegingertonicstudios@gmail.com", password: "test", password_confirmation: "test")
User.create(name: "Aki", email: "al@gakovic.com", password: "password", password_confirmation: "password")

bridge = Quote.create(author: "James Brown", text: "Take it to the bridge", audioUrl: testImage)
yes = Quote.create(author: "Barack Obama", text: "Yes we can", audioUrl: testImage)
heart = Quote.create(author: "Celine Dion", text: "The heart does go on", audioUrl: testImage)
frankly = Quote.create(author: "Clark", text: "Frankly my dear, I don't give a damn", audioUrl: testImage)
indy = Quote.create(author: "Indiana Jones", text: "Why'd it have to be snakes?", audioUrl: testImage)
shake = Quote.create(author: "Taylor Swift", text: "Shake it off", audioUrl: testImage)
hurts = Quote.create(author: "R.E.M", text: "Everybody hurts sometimes", audioUrl: testImage)
zelda = Quote.create(author: "Everyone", text: "Psst", audioUrl: testImage)
oranges = Quote.create(author: "The Bells of St Clemens", text: "Oranges and Lemons", audioUrl: testImage)
owl = Quote.create(author: "Phone Shop", text: "It were a owl", audioUrl: testImage)
free = Quote.create(author: "That guy", text: "I'm free", audioUrl: testImage)
dece = Quote.create(author: "Didi", text: "Dece", audioUrl: testImage)

Ambience.create(name: "funk", audioUrl: "www.test.com/funk")
Ambience.create(name: "love", audioUrl: "www.test.com/love")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity")
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Loving time")

loveInsp.quotes << heart
soulInsp.quotes << bridge
soulInsp.quotes << yes

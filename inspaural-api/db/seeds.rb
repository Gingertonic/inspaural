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

bridge = Quote.create(author: "James Brown", text: "Take it to the bridge", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
yes = Quote.create(author: "Barack Obama", text: "Yes we can", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
heart = Quote.create(author: "Celine Dion", text: "The heart does go on", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
frankly = Quote.create(author: "Clark", text: "Frankly my dear, I don't give a damn", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
indy = Quote.create(author: "Indiana Jones", text: "Why'd it have to be snakes?", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
shake = Quote.create(author: "Taylor Swift", text: "Shake it off", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
hurts = Quote.create(author: "R.E.M", text: "Everybody hurts sometimes", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
zelda = Quote.create(author: "Everyone", text: "Psst", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
oranges = Quote.create(author: "The Bells of St Clemens", text: "Oranges and Lemons", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
owl = Quote.create(author: "Phone Shop", text: "It were a owl", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
free = Quote.create(author: "That guy", text: "I'm free", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
dece = Quote.create(author: "Didi", text: "Dece", imageUrl: testImage, audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")

Ambience.create(name: "funk", audioUrl: "www.test.com/funk")
Ambience.create(name: "love", audioUrl: "www.test.com/love")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity")
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Loving time")

loveInsp.quotes << heart
soulInsp.quotes << bridge
soulInsp.quotes << yes

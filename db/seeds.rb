# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

airlines = Airline.create([
    {
        name: 'Qantas',
        image_url: 'https://www.qantas.com/content/dam/qantas/centenary/tiles/100%20Capsule-Logo-2016%201518x1012.jpg'
    },
    {
        name: 'Virgin',
        image_url: 'https://specials.virginaustralia.com/sites/default/files/1200x1200-va-stacked.jpg'
    }
])

reviews = Review.create([
    {
        title: 'Great Airline',
        description: 'I had a lovely time.',
        score: 5,
        airline: airlines.first
    },
    {
    title: 'Poor Experience',
    description: 'I had an awful time.',
    score: 1,
    airline: airlines.first
    }
])
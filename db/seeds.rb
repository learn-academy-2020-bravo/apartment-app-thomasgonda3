# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
managers = [
  {
    contact: "Bob",
    phone: "555-555-5555",
    hours: "9 to 5"
  },
  {
    contact: "John",
    phone: "555-666-7777",
    hours: "10 to 2"
  },
  {
    contact: "Jackie",
    phone: "888-999-1111",
    hours: "noon"
  }
]

bobs_apartments = [
  {
    street: "1850 main street",
    city: "Oakland",
    zip: 94629,
    state: "CA",
    country: "USA"
  },
  {
    street: "333 side street",
    city: "San Diego",
    zip: 92118,
    state: "CA",
    country: "USA"
  }
]

johns_apartments = [
  {
    street: "1999 half street",
    city: "Sacramento",
    zip: 95555,
    state: "CA",
    country: "USA"
  }
]

managers.each do |attributes|
  Manager.create attributes
end

bob = Manager.first
john = Manager.second

bobs_apartments.each do |attributes|
  bob.apartments.create attributes
end

johns_apartments.each do |attributes|
  john.apartments.create attributes
end

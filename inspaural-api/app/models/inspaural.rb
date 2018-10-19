class Inspaural < ApplicationRecord
  has_many :quotes
  belongs_to :user
  has_one :ambience
end

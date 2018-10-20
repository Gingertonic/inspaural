class Inspaural < ApplicationRecord
  has_and_belongs_to_many :quotes
  belongs_to :user
  belongs_to :ambience
end

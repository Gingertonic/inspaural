class InspauralSerializer < ActiveModel::Serializer
  attributes :id, :name, :quote1_vol, :quote2_vol, :quote3_vol, :quote4_vol, :ambience_vol
  has_many :quotes, serializer: SimpleQuoteSerializer
end

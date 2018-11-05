class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :author, :text, :audioUrl, :imageUrl
end

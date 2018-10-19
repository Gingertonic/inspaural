class User < ApplicationRecord
  has_many :inspaurals

  has_secure_password
end

class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages

  # nameカラムが空欄であることを非許容

  validates :name, presence: true, uniqueness: true
end
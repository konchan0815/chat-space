class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages

  # nameカラムが空欄であることを非許容
  validates :name, presence: true, uniqueness: true

  # 最新のメッセージを表示→三項演算子を使用してもOK
  def show_last_message
    if(last_message = messages.last).present?
      if last_message.body?
        last_message.body
      else
        "画像が投稿されています"
      end
    else
      "まだメッセージはないです"
    end
  end
end
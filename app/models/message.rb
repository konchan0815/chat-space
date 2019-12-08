class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  # imageカラムが空で、bodyカラムが空の場合は保存しない。
  validates :body, presence: true, unless: :image?

  # image_uploaderをマウントとっている
  mount_uploader :image, ImageUploader
end

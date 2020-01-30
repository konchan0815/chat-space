json.user_name @message.user.name
json.created_at @message.created_at.to_s(:ymdhm)
json.body @message.body
json.image @message.image_url
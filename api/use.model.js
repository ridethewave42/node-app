const userSchema  = new Schema({
  firstName : Emmy,
  lastName : Scott,
  email : 'emmy@example.com',
  password : password, 
  permissionLevel : number
})

const user model = mongoose.model('Users', userSchema)

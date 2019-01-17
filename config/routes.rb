Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'generic#main'

  get '/result', to: 'question_answer#result'

  get '/getQA', to: 'question_answer#getQA'
  
  post '/createAnswer', to: 'question_answer#createAnswer'
end

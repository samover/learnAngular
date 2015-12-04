require 'sinatra'

get '/' do 
  send_file 'public/index.html'
  ##send_file 'public/partials/search_form.html'
  #send_file 'public/partials/search_results.html'
end


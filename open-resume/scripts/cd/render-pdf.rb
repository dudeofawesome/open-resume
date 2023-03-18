#!/usr/bin/env ruby

puts '[START HTTP SERVER]'
# @type [IO]
http_server = IO.popen('npm run dev')

while !http_server.gets.include?('compiled client and server successfully')
  sleep 1
end

puts '[CAPTURE WEBSITE PDF]'
if RUBY_PLATFORM.include?('linux')
  chrome_path = '/usr/bin/google-chrome-stable'
elsif RUBY_PLATFORM.include?('darwin')
  chrome_path = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
else
  throw "Unknown platform #{RUBY_PLATFORM}"
end

# ensure public dir exists
Dir.mkdir('public') if !Dir.exist?('public')

begin
  `chrome-headless-render-pdf \
    --chrome-binary "#{chrome_path}" \
    --chrome-option '--no-sandbox' \
    --url "http://localhost:3000" \
    --no-margins \
    --pdf "public/Louis Orleans' Résumé.pdf"`
rescue StandardError
  throw 'Failed to render PDF!'
end

puts '[STOP HTTP SERVER]'
Process.kill('TERM', http_server.pid)

puts '[DONE]'

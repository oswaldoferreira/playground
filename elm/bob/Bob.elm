module Bob exposing (..)
import String exposing (endsWith, trim)
import Regex exposing (..)
import List exposing (..)

hey : String -> String
hey message =
  if yelling message then
    "Whoa, chill out!"
  else if endsWith "?" message then
    "Sure."
  else if trim message == "" then
    "Fine. Be that way!"
  else
    "Whatever."

hasExclamation message = contains (regex "!") message
downcaseCount message = length(find All (regex "[a-z]") message)
upcaseCount message = length(find All (regex "[A-Z]") message)

moreUpcaseThanLower message =
  upcaseCount(message) > downcaseCount(message)

yelling message =
  hasExclamation(message) && moreUpcaseThanLower(message) ||
    moreUpcaseThanLower(message)







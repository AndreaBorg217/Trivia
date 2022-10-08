/* eslint-disable prettier/prettier */
export function shuffleAnswers(array){
  array = array.sort(() => Math.random() - 0.5); //shuffle
  return ['a) ' + array[0], 'b) ' + array[1], 'c) ' + array[2], 'd) ' + array[3]]
}
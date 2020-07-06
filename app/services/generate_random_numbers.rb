class GenerateRandomNumbers
  @arr = []

  while @arr.length < 5 do
    newNumber = rand(2..10)
    unless @arr.include?(newNumber)
      @arr.push(newNumber)
    end
  end
end

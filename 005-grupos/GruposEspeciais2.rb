texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')  # com prefixo ( ?<= string)

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i) # sem prefixo ( ?<= string)
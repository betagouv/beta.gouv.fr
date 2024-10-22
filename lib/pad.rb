# frozen_string_literal: true

require_relative 'models/member'
require_relative 'models/startup'

# ce script est fourni comme point de départ pour exécuter des
# requêtes plus compliquées sur la base de fiches membres/startups de
# Beta.
#
# l'exemple ici : compter le nombre de startups sans coach. Ici on va
# le faire en :
#
# 1. recensant tous les membres dont la fonction inclue "coach". On se
# sert de `.role` (voir member.rb pour la liste complète des attributs
# exposés), qu'on met en minuscule pour éviter les différences liées à
# la casse casse
coaches = Beta::Member.all.select { |member| member.role.downcase.include?('coach') }

# 2. prenant toutes les startups actives où ils officient. On se sert
# de la méthode active_startups, puis on aplatit, on enlève les
# valeurs nulles, et on supprime les doublons.

startups_with_coaches = coaches.map(&:active_startups).flatten.compact.uniq

# 3. maintenant on prend toutes les startups sans distinction, on
# prend leur ID

all_startups = Beta::Startup.all.map(&:id)

# 4. et on fait la différence

startup_without_coaches = all_startups - startups_with_coaches

# 5. le mieux pour explorer votre résultat :

binding.irb # > startups_with_coaches.count

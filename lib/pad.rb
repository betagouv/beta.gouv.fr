# frozen_string_literal: true

require_relative 'models/member'
require_relative 'models/startup'

# ce script est fourni comme point de départ/manuel pour exécuter des
# requêtes plus compliquées sur la base de fiches membres/startups de
# Beta. Utiliser `make dsl` pour les exécuter.
#
# -- exemple 1 : compter le nombre de startups sans coach
Startup
  .all
  .select do |startup|
  startup.members.count { |m| m.role.downcase.include?('coach') } == 1
end

# -- exemple 2 : trouver les startups incubées à la DINUM en construction avec un seul développeur
Startup
  .all
  .filter { |s| s.incubator == 'dinum' }
  .filter { |s| s.in_construction? } # rubocop:disable Style/SymbolProc
  .filter { |s| s.members.count { |member| member.domaine == 'Développement' } == 1 }

# -- exmple 3 : trouver tout les coaches qui ont plus de 3 startups passées (i.e n'y travaillent plus)
Member
  .all
  .select { |m| m.domaine == 'Coaching' }
  .select { |m| m.legacy_startups.count > 3 }

# -- exemple 4 : classer les prénoms des membres par fréquences
Member
  .all
  .map { |m| m.fullname.split.first.capitalize }
  .tally
  .sort_by { |_name, count| count }

# -- exemple 5 : toutes les startups dont le nom contient "Mon/Ma/Mes"
Startup
  .all
  .map(&:title)
  .grep(/(\A|\s)m(on|a|es) /i) # start of the string \A or whitespace \s followed by m(on|a|es), case insensitive

# -- exemple 5 bis : la même chose sans regexp
Startup
  .all
  .map(&:title)
  .select { |title| title.split.map(&:downcase).intersect?(%w[mon ma mes]) }

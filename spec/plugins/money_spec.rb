# frozen_string_literal: true

require 'spec_helper'

describe Jekyll::BetaGouv::MoneyFilter do
  matrix = {
    1 => '1 €',
    100 => '100 €',
    1000 => '1 000 €',
    10_000 => '10 000 €',
    66_666 => '66 666 €',
    1_234_567 => '1 234 567 €'
  }

  matrix.each do |number, format|
    it "formats '#{number}' into '#{format}'" do
      expect(template.to_euros(number)).to eq format
    end
  end

  it 'does not work with decimals' do
    expect { template.to_euros(120.234) }.to raise_error(/only works with integers/)
  end
end

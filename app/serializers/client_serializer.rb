class ClientSerializer < ActiveModel::Serializer
  attributes :id, :title, :full_name, :tax_number, :description, :logo, :updated_at
end
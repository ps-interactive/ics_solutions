defmodule Neon.Repo.Migrations.AddCommentsTable do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :body, :text, null: false
      add :author, :text
      add :event_id, references(:events, on_delete: :delete_all)

      timestamps()
    end

    create index(:comments, [:event_id])
  end
end

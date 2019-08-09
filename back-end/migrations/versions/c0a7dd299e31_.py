"""empty message

Revision ID: c0a7dd299e31
Revises: 
Create Date: 2019-07-28 20:14:12.865724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c0a7dd299e31'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'app', ['api_key'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'app', type_='unique')
    # ### end Alembic commands ###

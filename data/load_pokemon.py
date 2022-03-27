# %%

import pandas as pd
import json
import numpy as np
import re
# import helper_functions
# return first string unless name contains Mr. Jr. Tapu or Type:

# %%


def get_name(name):
    if 'Mr.' in name:
        return name
    elif 'Type:' in name:
        return name
    elif 'Jr.' in name:
        return name
    elif 'Tapu' in name:
        return name
    else:
        return name.split(' ')[0]


# %%
# dataset 2 - used to get descriptions of pokemon

# read pokedex2.xlsx to dataframe
descriptions = pd.read_excel('pokedex2.xlsx')[0:890]

# dataset 1 - main dataset
pokemon = pd.read_csv('pokedex.csv')

colnames = ['pokedex_number', 'generation', 'name']
pokemon = pokemon[colnames]

# get only unique pokedex numbers
pokemon = pokemon.drop_duplicates(
    keep="first", subset='pokedex_number')
pokemon.reset_index(drop=True, inplace=True)

pokemon['description'] = descriptions['description']
colnames.append('description')
pokemon.reset_index(drop=True, inplace=True)

# combine all_pokemon and all_pokemon_2 where pokedex_number is the same
pokemon = pokemon[colnames]
pokemon.reset_index(drop=True, inplace=True)

pokemon['name'] = pokemon['name'].apply(get_name)

audio_re = '[^A-z0-9]'
image_re = '[^A-z0-9-]'

pokemon['sound_name'] = pokemon['name'].replace(
    audio_re, '', regex=True).str.lower()

pokemon['image_name'] = pokemon['name'].replace(
    image_re, '', regex=True).str.lower()

# type null


pokemon.to_csv('pokemon_data.csv')
pokemon.to_json('pokemon_data.json', orient='records')


# %%

# separate the data by generation
# gen1 = all_pokemon[all_pokemon['generation'] == 1]
# gen2 = all_pokemon[all_pokemon['generation'] == 2]
# gen3 = all_pokemon[all_pokemon['generation'] == 3]
# gen4 = all_pokemon[all_pokemon['generation'] == 4]
# gen5 = all_pokemon[all_pokemon['generation'] == 5]
# gen6 = all_pokemon[all_pokemon['generation'] == 6]
# gen7 = all_pokemon[all_pokemon['generation'] == 7]
# gen8 = all_pokemon[all_pokemon['generation'] == 8]

# separate the data by generation
# gen1_pok = gen1[pokemon_gam_col]
# gen2_pok = gen2[pokemon_gam_col]
# gen3_pok = gen3[pokemon_gam_col]
# gen4_pok = gen4[pokemon_gam_col]
# gen5_pok = gen5[pokemon_gam_col]
# gen6_pok = gen6[pokemon_gam_col]
# gen7_pok = gen7[pokemon_gam_col]
# gen8_pok = gen8[pokemon_gam_col]

# export generation data to csv files
# gen1_pok.to_csv('gen1_pokemon.csv', index=False)
# gen2_pok.to_csv('gen2_pokemon.csv', index=False)
# gen3_pok.to_csv('gen3_pokemon.csv', index=False)
# gen4_pok.to_csv('gen4_pokemon.csv', index=False)
# gen5_pok.to_csv('gen5_pokemon.csv', index=False)
# gen6_pok.to_csv('gen6_pokemon.csv', index=False)
# gen7_pok.to_csv('gen7_pokemon.csv', index=False)
# gen8_pok.to_csv('gen8_pokemon.csv', index=False)

# convert .csv files to json files
# gen1_pok.to_json('gen1_pokemon.json', orient='records')
# gen2_pok.to_json('gen2_pokemon.json', orient='records')
# gen3_pok.to_json('gen3_pokemon.json', orient='records')
# gen4_pok.to_json('gen4_pokemon.json', orient='records')
# gen5_pok.to_json('gen5_pokemon.json', orient='records')
# gen6_pok.to_json('gen6_pokemon.json', orient='records')
# gen7_pok.to_json('gen7_pokemon.json', orient='records')
# gen8_pok.to_json('gen8_pokemon.json', orient='records')

import pandas as pd
import numpy as np
import scipy.stats
import helper_functions

stat_cols = ['hp', 'attack', 'defense', 'sp_attack', 'sp_defense', 'speed']
physical_attr_cols = ['height_m', 'weight_kg']
tab: str = "\t"

all_pokemon = pd.read_csv('./data/pokedex.csv').dropna(
    subset=(stat_cols + physical_attr_cols))

# length
num_pokemon = len(all_pokemon)
# ---------------------------------------

# --- column labels for Pokemon ----------------------------------------------------------------
cols = list(all_pokemon.columns.values)  # name of columns in type dataframes
total_attr = len(cols)  # count of col labels
# ------------------------------------------------------------------------------------------------

# --- z score column labels for Pokemon ----------------------------------------------------------------------------
z_cols = ['hp', 'attack', 'defense', 'sp_attack', 'sp_defense',
          'speed', 'total_points', 'weight_kg', 'height_m']
study_attr = len(z_cols)  # count of z col labels
# ------------------------------------------------------------------------------------------------------------------

# Trim bounds ------------------------------------------------------------------------------------------------------
height_trim_low = .1
height_trim_high = 2.33
weight_trim_low = 1
weight_trim_high = 300
# ------------------------------------------------------------------------------------------------------------------


# different sets of pokemon
# ---------------------------------------------------------------------------------------------------------------
# pokemon trimmed by height bounds
pokemon_trimmed_heights = all_pokemon[(all_pokemon['height_m'] > height_trim_low) &
                                      (all_pokemon['height_m'] < height_trim_high)]
# length
num_trim_h = len(pokemon_trimmed_heights)
# ---------------------------------------------------------------------------------------------------------------


# ---------------------------------------------------------------------------------------------------------------
# pokemon trimmed by weight bounds
pokemon_trimmed_weights = all_pokemon[(all_pokemon['weight_kg'] > weight_trim_low) &
                                      (all_pokemon['weight_kg'] < weight_trim_high)]
# length
num_trim_w = len(pokemon_trimmed_weights)
# ---------------------------------------------------------------------------------------------------------------


# ---------------------------------------------------------------------------------------------------------------
# pokemon trimmed by height and weight bounds
pkm_trim_hw = all_pokemon[(all_pokemon['weight_kg'] > weight_trim_low) &
                          (all_pokemon['weight_kg'] < weight_trim_high) &
                          (all_pokemon['height_m'] > height_trim_low) &
                          (all_pokemon['height_m'] < height_trim_high)]
# length
num_trim_pokemon = len(pkm_trim_hw)
# ---------------------------------------------------------------------------------------------------------------


# ---------------------------------------------------------------------------------------------------------------
# legendary pokemon (including mythical)
legendary_pokemon = all_pokemon.loc[(
    all_pokemon['is_legendary'] == 1) | (all_pokemon['is_mythical'] == 1)]

# length
num_legendary = len(legendary_pokemon)
# ---------------------------------------------------------------------------------------------------------------


# ---------------------------------------------------------------------------------------------------------------
# non legendary pokemon (including mythical)
non_legendary_pokemon = all_pokemon.loc[(
    all_pokemon['is_legendary'] == 0) & (all_pokemon['is_mythical'] == 0)]

# length
num_non_legendary = len(non_legendary_pokemon)
# ---------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------
# grouping by type (all)
fire_types = all_pokemon.loc[(all_pokemon['type_1'] == "Fire") | (
    all_pokemon['type_2'] == "Fire")]
water_types = all_pokemon.loc[(all_pokemon['type_1'] == "Water") | (
    all_pokemon['type_2'] == "Water")]
grass_types = all_pokemon.loc[(all_pokemon['type_1'] == "Grass") | (
    all_pokemon['type_2'] == "Grass")]
electric_types = all_pokemon.loc[(all_pokemon['type_1'] == "Electric") | (
    all_pokemon['type_2'] == "Electric")]
normal_types = all_pokemon.loc[(all_pokemon['type_1'] == "Normal") | (
    all_pokemon['type_2'] == "Normal")]
ground_types = all_pokemon.loc[(all_pokemon['type_1'] == "Ground") | (
    all_pokemon['type_2'] == "Ground")]
rock_types = all_pokemon.loc[(all_pokemon['type_1'] == "Rock") | (
    all_pokemon['type_2'] == "Rock")]
steel_types = all_pokemon.loc[(all_pokemon['type_1'] == "Steel") | (
    all_pokemon['type_2'] == "Steel")]
ice_types = all_pokemon.loc[(all_pokemon['type_1'] == "Ice") | (
    all_pokemon['type_2'] == "Ice")]
flying_types = all_pokemon.loc[(all_pokemon['type_1'] == "Flying") | (
    all_pokemon['type_2'] == "Flying")]
fighting_types = all_pokemon.loc[(all_pokemon['type_1'] == "Fighting") | (
    all_pokemon['type_2'] == "Fighting")]
poison_types = all_pokemon.loc[(all_pokemon['type_1'] == "Poison") | (
    all_pokemon['type_2'] == "Poison")]
psychic_types = all_pokemon.loc[(all_pokemon['type_1'] == "Psychic") | (
    all_pokemon['type_2'] == "Psychic")]
bug_types = all_pokemon.loc[(all_pokemon['type_1'] == "Bug") | (
    all_pokemon['type_2'] == "Bug")]
ghost_types = all_pokemon.loc[(all_pokemon['type_1'] == "Ghost") | (
    all_pokemon['type_2'] == "Ghost")]
dark_types = all_pokemon.loc[(all_pokemon['type_1'] == "Dark") | (
    all_pokemon['type_2'] == "Dark")]
dragon_types = all_pokemon.loc[(all_pokemon['type_1'] == "Dragon") | (
    all_pokemon['type_2'] == "Dragon")]
fairy_types = all_pokemon.loc[(all_pokemon['type_1'] == "Fairy") | (
    all_pokemon['type_2'] == "Fairy")]
# ---------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------
# grouping by type (trimmed)
trimmed_fire_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Fire") | (pkm_trim_hw['type_2'] == "Fire")]
trimmed_water_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Water") | (pkm_trim_hw['type_2'] == "Water")]
trimmed_grass_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Grass") | (pkm_trim_hw['type_2'] == "Grass")]
trimmed_electric_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Electric") | (pkm_trim_hw['type_2'] == "Electric")]
trimmed_normal_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Normal") | (pkm_trim_hw['type_2'] == "Normal")]
trimmed_ground_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Ground") | (pkm_trim_hw['type_2'] == "Ground")]
trimmed_rock_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Rock") | (pkm_trim_hw['type_2'] == "Rock")]
trimmed_steel_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Steel") | (pkm_trim_hw['type_2'] == "Steel")]
trimmed_ice_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Ice") | (pkm_trim_hw['type_2'] == "Ice")]
trimmed_flying_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Flying") | (pkm_trim_hw['type_2'] == "Flying")]
trimmed_fighting_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Fighting") | (pkm_trim_hw['type_2'] == "Fighting")]
trimmed_poison_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Poison") | (pkm_trim_hw['type_2'] == "Poison")]
trimmed_psychic_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Psychic") | (pkm_trim_hw['type_2'] == "Psychic")]
trimmed_bug_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Bug") | (pkm_trim_hw['type_2'] == "Bug")]
trimmed_ghost_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Ghost") | (pkm_trim_hw['type_2'] == "Ghost")]
trimmed_dark_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Dark") | (pkm_trim_hw['type_2'] == "Dark")]
trimmed_dragon_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Dragon") | (pkm_trim_hw['type_2'] == "Dragon")]
trimmed_fairy_types = pkm_trim_hw.loc[(
    pkm_trim_hw['type_1'] == "Fairy") | (pkm_trim_hw['type_2'] == "Fairy")]
# -----------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------
# grouping by type (legendary)
legendary_fire_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Fire") | (legendary_pokemon['type_2'] == "Fire")]
legendary_water_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Water") | (legendary_pokemon['type_2'] == "Water")]
legendary_grass_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Grass") | (legendary_pokemon['type_2'] == "Grass")]
legendary_electric_types = legendary_pokemon.loc[
    (legendary_pokemon['type_1'] == "Electric") | (legendary_pokemon['type_2'] == "Electric")]
legendary_normal_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Normal") | (legendary_pokemon['type_2'] == "Normal")]
legendary_ground_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Ground") | (legendary_pokemon['type_2'] == "Ground")]
legendary_rock_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Rock") | (legendary_pokemon['type_2'] == "Rock")]
legendary_steel_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Steel") | (legendary_pokemon['type_2'] == "Steel")]
legendary_ice_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Ice") | (legendary_pokemon['type_2'] == "Ice")]
legendary_flying_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Flying") | (legendary_pokemon['type_2'] == "Flying")]
legendary_fighting_types = legendary_pokemon.loc[
    (legendary_pokemon['type_1'] == "Fighting") | (legendary_pokemon['type_2'] == "Fighting")]
legendary_poison_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Poison") | (legendary_pokemon['type_2'] == "Poison")]
legendary_psychic_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Psychic") | (legendary_pokemon['type_2'] == "Psychic")]
legendary_bug_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Bug") | (legendary_pokemon['type_2'] == "Bug")]
legendary_ghost_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Ghost") | (legendary_pokemon['type_2'] == "Ghost")]
legendary_dark_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Dark") | (legendary_pokemon['type_2'] == "Dark")]
legendary_dragon_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Dragon") | (legendary_pokemon['type_2'] == "Dragon")]
legendary_fairy_types = legendary_pokemon.loc[(
    legendary_pokemon['type_1'] == "Fairy") | (legendary_pokemon['type_2'] == "Fairy")]
# ---------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------
# grouping by type (non legendary)
non_legendary_fire_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Fire") | (non_legendary_pokemon['type_2'] == "Fire")]
non_legendary_water_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Water") | (non_legendary_pokemon['type_2'] == "Water")]
non_legendary_grass_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Grass") | (non_legendary_pokemon['type_2'] == "Grass")]
non_legendary_electric_types = non_legendary_pokemon.loc[
    (non_legendary_pokemon['type_1'] == "Electric") | (non_legendary_pokemon['type_2'] == "Electric")]
non_legendary_normal_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Normal") | (non_legendary_pokemon['type_2'] == "Normal")]
non_legendary_ground_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Ground") | (non_legendary_pokemon['type_2'] == "Ground")]
non_legendary_rock_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Rock") | (non_legendary_pokemon['type_2'] == "Rock")]
non_legendary_steel_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Steel") | (non_legendary_pokemon['type_2'] == "Steel")]
non_legendary_ice_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Ice") | (non_legendary_pokemon['type_2'] == "Ice")]
non_legendary_flying_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Flying") | (non_legendary_pokemon['type_2'] == "Flying")]
non_legendary_fighting_types = non_legendary_pokemon.loc[
    (non_legendary_pokemon['type_1'] == "Fighting") | (non_legendary_pokemon['type_2'] == "Fighting")]
non_legendary_poison_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Poison") | (non_legendary_pokemon['type_2'] == "Poison")]
non_legendary_psychic_types = non_legendary_pokemon.loc[
    (non_legendary_pokemon['type_1'] == "Psychic") | (non_legendary_pokemon['type_2'] == "Psychic")]
non_legendary_bug_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Bug") | (non_legendary_pokemon['type_2'] == "Bug")]
non_legendary_ghost_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Ghost") | (non_legendary_pokemon['type_2'] == "Ghost")]
non_legendary_dark_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Dark") | (non_legendary_pokemon['type_2'] == "Dark")]
non_legendary_dragon_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Dragon") | (non_legendary_pokemon['type_2'] == "Dragon")]
non_legendary_fairy_types = non_legendary_pokemon.loc[(
    non_legendary_pokemon['type_1'] == "Fairy") | (non_legendary_pokemon['type_2'] == "Fairy")]
# ---------------------------------------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# pokemon relevant categories (all)
total_points = all_pokemon['total_points']
hp = all_pokemon['hp']
speed = all_pokemon['speed']
attack = all_pokemon['attack']
sp_attack = all_pokemon['sp_attack']
defense = all_pokemon['defense']
sp_defense = all_pokemon['sp_defense']
heights = all_pokemon['height_m']
weight = all_pokemon['weight_kg']
# ------------------------------------------------------------------------------
# pokemon relevant categories (trimmed)
trimmed_total_points = pkm_trim_hw['total_points']
trimmed_hp = pkm_trim_hw['hp']
trimmed_speed = pkm_trim_hw['speed']
trimmed_attack = pkm_trim_hw['attack']
trimmed_sp_attack = pkm_trim_hw['sp_attack']
trimmed_defense = pkm_trim_hw['defense']
trimmed_sp_defense = pkm_trim_hw['sp_defense']
trimmed_height = pkm_trim_hw['height_m']
trimmed_weight = pkm_trim_hw['weight_kg']
# ------------------------------------------------------------------------------
# pokemon relevant categories (legendary)
legendary_total_points = legendary_pokemon['total_points']
legendary_hp = legendary_pokemon['hp']
legendary_speed = legendary_pokemon['speed']
legendary_attack = legendary_pokemon['attack']
legendary_sp_attack = legendary_pokemon['sp_attack']
legendary_defense = legendary_pokemon['defense']
legendary_sp_defense = legendary_pokemon['sp_defense']
legendary_height = legendary_pokemon['height_m']
legendary_weight = legendary_pokemon['weight_kg']
# ------------------------------------------------------------------------------
# pokemon relevant categories (non legendary)
non_legendary_total_points = non_legendary_pokemon['total_points']
non_legendary_hp = non_legendary_pokemon['hp']
non_legendary_speed = non_legendary_pokemon['speed']
non_legendary_attack = non_legendary_pokemon['attack']
non_legendary_sp_attack = non_legendary_pokemon['sp_attack']
non_legendary_defense = non_legendary_pokemon['defense']
non_legendary_sp_defense = non_legendary_pokemon['sp_defense']
non_legendary_height = non_legendary_pokemon['height_m']
non_legendary_weight = non_legendary_pokemon['weight_kg']
# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# pokemon stats by category (all)
total_points_stats = total_points.describe()
hp_stats = hp.describe()
speed_stats = speed.describe()
attack_stats = attack.describe()
sp_attack_stats = sp_attack.describe()
defense_stats = defense.describe()
sp_defense_stats = sp_defense.describe()
height_stats = heights.describe()
weight_stats = weight.describe()
# ------------------------------------------------------------------------------
# pokemon stats by category (trimmed)
trimmed_total_points_stats = trimmed_total_points.describe()
trimmed_hp_stats = trimmed_hp.describe()
trimmed_speed_stats = trimmed_speed.describe()
trimmed_attack_stats = trimmed_attack.describe()
trimmed_sp_attack_stats = trimmed_sp_attack.describe()
trimmed_defense_stats = trimmed_defense.describe()
trimmed_sp_defense_stats = trimmed_sp_defense.describe()
trimmed_height_stats = trimmed_height.describe()
trimmed_weight_stats = trimmed_weight.describe()
# ------------------------------------------------------------------------------
# pokemon stats by category (legendary)
legendary_total_points_stats = legendary_total_points.describe()
legendary_hp_stats = legendary_hp.describe()
legendary_speed_stats = legendary_speed.describe()
legendary_attack_stats = legendary_attack.describe()
legendary_sp_attack_stats = legendary_sp_attack.describe()
legendary_defense_stats = legendary_defense.describe()
legendary_sp_defense_stats = legendary_sp_defense.describe()
legendary_height_stats = legendary_height.describe()
legendary_weight_stats = legendary_weight.describe()
# ------------------------------------------------------------------------------
# pokemon stats by category (non legendary)
non_legendary_total_points_stats = non_legendary_total_points.describe()
non_legendary_hp_stats = non_legendary_hp.describe()
non_legendary_speed_stats = non_legendary_speed.describe()
non_legendary_attack_stats = non_legendary_attack.describe()
non_legendary_sp_attack_stats = non_legendary_sp_attack.describe()
non_legendary_defense_stats = non_legendary_defense.describe()
non_legendary_sp_defense_stats = non_legendary_sp_defense.describe()
non_legendary_height_stats = non_legendary_height.describe()
non_legendary_weight_stats = non_legendary_weight.describe()
# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# type stats (all)
stats_fire_types = fire_types.describe()
stats_water_types = water_types.describe()
stats_grass_types = grass_types.describe()
stats_electric_types = electric_types.describe()
stats_normal_types = normal_types.describe()
stats_ground_types = ground_types.describe()
stats_rock_types = rock_types.describe()
stats_steel_types = steel_types.describe()
stats_ice_types = ice_types.describe()
stats_flying_types = flying_types.describe()
stats_fighting_types = fighting_types.describe()
stats_poison_types = poison_types.describe()
stats_psychic_types = psychic_types.describe()
stats_bug_types = bug_types.describe()
stats_ghost_types = ghost_types.describe()
stats_dark_types = dark_types.describe()
stats_dragon_types = dragon_types.describe()
stats_fairy_types = fairy_types.describe()
# ------------------------------------------------------------------------------
# type stats (trimmed)
stats_trimmed_fire_types = trimmed_fire_types.describe()
stats_trimmed_water_types = trimmed_water_types.describe()
stats_trimmed_grass_types = trimmed_grass_types.describe()
stats_trimmed_electric_types = trimmed_electric_types.describe()
stats_trimmed_normal_types = trimmed_normal_types.describe()
stats_trimmed_ground_types = trimmed_ground_types.describe()
stats_trimmed_rock_types = trimmed_rock_types.describe()
stats_trimmed_steel_types = trimmed_steel_types.describe()
stats_trimmed_ice_types = trimmed_ice_types.describe()
stats_trimmed_flying_types = trimmed_flying_types.describe()
stats_trimmed_fighting_types = trimmed_fighting_types.describe()
stats_trimmed_poison_types = trimmed_poison_types.describe()
stats_trimmed_psychic_types = trimmed_psychic_types.describe()
stats_trimmed_bug_types = trimmed_bug_types.describe()
stats_trimmed_ghost_types = trimmed_ghost_types.describe()
stats_trimmed_dark_types = trimmed_dark_types.describe()
stats_trimmed_dragon_types = trimmed_dragon_types.describe()
stats_trimmed_fairy_types = trimmed_fairy_types.describe()
# ------------------------------------------------------------------------------
# type stats (legendary)
stats_legendary_fire_types = legendary_fire_types.describe()
stats_legendary_water_types = legendary_water_types.describe()
stats_legendary_grass_types = legendary_grass_types.describe()
stats_legendary_electric_types = legendary_electric_types.describe()
stats_legendary_normal_types = legendary_normal_types.describe()
stats_legendary_ground_types = legendary_ground_types.describe()
stats_legendary_rock_types = legendary_rock_types.describe()
stats_legendary_steel_types = legendary_steel_types.describe()
stats_legendary_ice_types = legendary_ice_types.describe()
stats_legendary_flying_types = legendary_flying_types.describe()
stats_legendary_fighting_types = legendary_fighting_types.describe()
stats_legendary_poison_types = legendary_poison_types.describe()
stats_legendary_psychic_types = legendary_psychic_types.describe()
stats_legendary_bug_types = legendary_bug_types.describe()
stats_legendary_ghost_types = legendary_ghost_types.describe()
stats_legendary_dark_types = legendary_dark_types.describe()
stats_legendary_dragon_types = legendary_dragon_types.describe()
stats_legendary_fairy_types = legendary_fairy_types.describe()
# ------------------------------------------------------------------------------
# type stats (non legendary)
stats_non_legendary_fire_types = non_legendary_fire_types.describe()
stats_non_legendary_water_types = non_legendary_water_types.describe()
stats_non_legendary_grass_types = non_legendary_grass_types.describe()
stats_non_legendary_electric_types = non_legendary_electric_types.describe()
stats_non_legendary_normal_types = non_legendary_normal_types.describe()
stats_non_legendary_ground_types = non_legendary_ground_types.describe()
stats_non_legendary_rock_types = non_legendary_rock_types.describe()
stats_non_legendary_steel_types = non_legendary_steel_types.describe()
stats_non_legendary_ice_types = non_legendary_ice_types.describe()
stats_non_legendary_flying_types = non_legendary_flying_types.describe()
stats_non_legendary_fighting_types = non_legendary_fighting_types.describe()
stats_non_legendary_poison_types = non_legendary_poison_types.describe()
stats_non_legendary_psychic_types = non_legendary_psychic_types.describe()
stats_non_legendary_bug_types = non_legendary_bug_types.describe()
stats_non_legendary_ghost_types = non_legendary_ghost_types.describe()
stats_non_legendary_dark_types = non_legendary_dark_types.describe()
stats_non_legendary_dragon_types = non_legendary_dragon_types.describe()
stats_non_legendary_fairy_types = non_legendary_fairy_types.describe()
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# pokemon set z scores
z_pokemon = helper_functions.z_score(all_pokemon[z_cols])
z_pokemon_t_h = helper_functions.z_score(pokemon_trimmed_heights[z_cols])
z_pokemon_t_w = helper_functions.z_score(pokemon_trimmed_weights[z_cols])
z_trimmed_pokemon = helper_functions.z_score(pkm_trim_hw[z_cols])
z_pokemon_legendary = helper_functions.z_score(legendary_pokemon[z_cols])
z_pokemon_non_legendary = helper_functions.z_score(
    non_legendary_pokemon[z_cols])
# ------------------------------------------------------------------------------
# z scores for pokemon stat values (all)
z_total_points = helper_functions.z_score(total_points)
z_total_points_stats = z_total_points.describe()
z_hp = helper_functions.z_score(hp)
z_hp_stats = z_hp.describe()
z_attack = helper_functions.z_score(attack)
z_attack_stats = z_attack.describe()
z_defense = helper_functions.z_score(defense)
z_defense_stats = z_defense.describe()
z_sp_attack = helper_functions.z_score(sp_attack)
z_sp_attack_stats = z_sp_attack.describe()
z_sp_defense = helper_functions.z_score(sp_defense)
z_sp_defense_stats = z_sp_defense.describe()
z_speed = helper_functions.z_score(speed)
z_speed_stats = z_speed.describe()
z_weight = helper_functions.z_score(weight)
z_weight_stats = z_weight.describe()
z_height = helper_functions.z_score(heights)
z_height_stats = z_height.describe()
# ------------------------------------------------------------------------------
# z scores for pokemon stat values (trimmed)
z_trimmed_total_points = helper_functions.z_score(trimmed_total_points)
z_trimmed_total_points_stats = z_trimmed_total_points.describe()
z_trimmed_hp = helper_functions.z_score(trimmed_hp)
z_trimmed_hp_stats = z_trimmed_hp.describe()
z_trimmed_attack = helper_functions.z_score(trimmed_attack)
z_trimmed_attack_stats = z_trimmed_attack.describe()
z_trimmed_defense = helper_functions.z_score(trimmed_defense)
z_trimmed_defense_stats = z_trimmed_defense.describe()
z_trimmed_sp_attack = helper_functions.z_score(trimmed_sp_attack)
z_trimmed_sp_attack_stats = z_trimmed_sp_attack.describe()
z_trimmed_sp_defense = helper_functions.z_score(trimmed_sp_defense)
z_trimmed_sp_defense_stats = z_trimmed_sp_defense.describe()
z_trimmed_speed = helper_functions.z_score(trimmed_speed)
z_trimmed_speed_stats = z_trimmed_speed.describe()
z_trimmed_weight = helper_functions.z_score(trimmed_weight)
z_trimmed_weight_stats = z_trimmed_weight.describe()
z_trimmed_height = helper_functions.z_score(trimmed_height)
z_trimmed_height_stats = z_trimmed_height.describe()
# ------------------------------------------------------------------------------
# z scores for pokemon stat values (legendary)
z_legendary_total_points = helper_functions.z_score(legendary_total_points)
z_legendary_total_points_stats = z_legendary_total_points.describe()
z_legendary_hp = helper_functions.z_score(legendary_hp)
z_legendary_hp_stats = z_legendary_hp.describe()
z_legendary_attack = helper_functions.z_score(legendary_attack)
z_legendary_attack_stats = z_legendary_attack.describe()
z_legendary_defense = helper_functions.z_score(legendary_defense)
z_legendary_defense_stats = z_legendary_defense.describe()
z_legendary_sp_attack = helper_functions.z_score(legendary_sp_attack)
z_legendary_sp_attack_stats = z_legendary_sp_attack.describe()
z_legendary_sp_defense = helper_functions.z_score(legendary_sp_defense)
z_legendary_sp_defense_stats = z_legendary_sp_defense.describe()
z_legendary_speed = helper_functions.z_score(legendary_speed)
z_legendary_speed_stats = z_legendary_speed.describe()
z_legendary_weight = helper_functions.z_score(legendary_weight)
z_legendary_weight_stats = z_legendary_weight.describe()
z_legendary_height = helper_functions.z_score(legendary_height)
z_legendary_height_stats = z_legendary_height.describe()
# ------------------------------------------------------------------------------
# z scores for pokemon stat values (non legendary)
z_non_legendary_total_points = helper_functions.z_score(
    non_legendary_total_points)
z_non_legendary_total_points_stats = z_non_legendary_total_points.describe()
z_non_legendary_hp = helper_functions.z_score(non_legendary_hp)
z_non_legendary_hp_stats = z_non_legendary_hp.describe()
z_non_legendary_attack = helper_functions.z_score(non_legendary_attack)
z_non_legendary_attack_stats = z_non_legendary_attack.describe()
z_non_legendary_defense = helper_functions.z_score(non_legendary_defense)
z_non_legendary_defense_stats = z_non_legendary_defense.describe()
z_non_legendary_sp_attack = helper_functions.z_score(non_legendary_sp_attack)
z_non_legendary_sp_attack_stats = z_non_legendary_sp_attack.describe()
z_non_legendary_sp_defense = helper_functions.z_score(non_legendary_sp_defense)
z_non_legendary_sp_defense_stats = z_non_legendary_sp_defense.describe()
z_non_legendary_speed = helper_functions.z_score(non_legendary_speed)
z_non_legendary_speed_stats = z_non_legendary_speed.describe()
z_non_legendary_weight = helper_functions.z_score(non_legendary_weight)
z_non_legendary_weight_stats = z_non_legendary_weight.describe()
z_non_legendary_height = helper_functions.z_score(non_legendary_height)
z_non_legendary_height_stats = z_non_legendary_height.describe()
# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# pokemon type z scores (all)
z_fire = helper_functions.z_score(fire_types[z_cols])
z_water = helper_functions.z_score(water_types[z_cols])
z_grass = helper_functions.z_score(grass_types[z_cols])
z_electric = helper_functions.z_score(electric_types[z_cols])
z_psychic = helper_functions.z_score(psychic_types[z_cols])
z_ghost = helper_functions.z_score(ghost_types[z_cols])
z_normal = helper_functions.z_score(normal_types[z_cols])
z_fighting = helper_functions.z_score(fighting_types[z_cols])
z_ice = helper_functions.z_score(ice_types[z_cols])
z_dark = helper_functions.z_score(dark_types[z_cols])
z_fairy = helper_functions.z_score(fairy_types[z_cols])
z_poison = helper_functions.z_score(poison_types[z_cols])
z_ground = helper_functions.z_score(ground_types[z_cols])
z_rock = helper_functions.z_score(rock_types[z_cols])
z_steel = helper_functions.z_score(steel_types[z_cols])
z_bug = helper_functions.z_score(bug_types[z_cols])
z_flying = helper_functions.z_score(flying_types[z_cols])
z_dragon = helper_functions.z_score(dragon_types[z_cols])
# ------------------------------------------------------------------------------
# pokemon type z scores (trim)
z_trimmed_fire = helper_functions.z_score(trimmed_fire_types[z_cols])
z_trimmed_water = helper_functions.z_score(trimmed_water_types[z_cols])
z_trimmed_grass = helper_functions.z_score(trimmed_grass_types[z_cols])
z_trimmed_electric = helper_functions.z_score(trimmed_electric_types[z_cols])
z_trimmed_psychic = helper_functions.z_score(trimmed_psychic_types[z_cols])
z_trimmed_ghost = helper_functions.z_score(trimmed_ghost_types[z_cols])
z_trimmed_normal = helper_functions.z_score(trimmed_normal_types[z_cols])
z_trimmed_fighting = helper_functions.z_score(trimmed_fighting_types[z_cols])
z_trimmed_ice = helper_functions.z_score(trimmed_ice_types[z_cols])
z_trimmed_dark = helper_functions.z_score(trimmed_dark_types[z_cols])
z_trimmed_fairy = helper_functions.z_score(trimmed_fairy_types[z_cols])
z_trimmed_poison = helper_functions.z_score(trimmed_poison_types[z_cols])
z_trimmed_ground = helper_functions.z_score(trimmed_ground_types[z_cols])
z_trimmed_rock = helper_functions.z_score(trimmed_rock_types[z_cols])
z_trimmed_steel = helper_functions.z_score(trimmed_steel_types[z_cols])
z_trimmed_bug = helper_functions.z_score(trimmed_bug_types[z_cols])
z_trimmed_flying = helper_functions.z_score(trimmed_flying_types[z_cols])
z_trimmed_dragon = helper_functions.z_score(trimmed_dragon_types[z_cols])
# ------------------------------------------------------------------------------
# pokemon type z scores (legendary)
z_legendary_fire = helper_functions.z_score(legendary_fire_types[z_cols])
z_legendary_water = helper_functions.z_score(legendary_water_types[z_cols])
z_legendary_grass = helper_functions.z_score(legendary_grass_types[z_cols])
z_legendary_electric = helper_functions.z_score(
    legendary_electric_types[z_cols])
z_legendary_psychic = helper_functions.z_score(legendary_psychic_types[z_cols])
z_legendary_ghost = helper_functions.z_score(legendary_ghost_types[z_cols])
z_legendary_normal = helper_functions.z_score(legendary_normal_types[z_cols])
z_legendary_fighting = helper_functions.z_score(
    legendary_fighting_types[z_cols])
z_legendary_ice = helper_functions.z_score(legendary_ice_types[z_cols])
z_legendary_dark = helper_functions.z_score(legendary_dark_types[z_cols])
z_legendary_fairy = helper_functions.z_score(legendary_fairy_types[z_cols])
z_legendary_poison = helper_functions.z_score(legendary_poison_types[z_cols])
z_legendary_ground = helper_functions.z_score(legendary_ground_types[z_cols])
z_legendary_rock = helper_functions.z_score(legendary_rock_types[z_cols])
z_legendary_steel = helper_functions.z_score(legendary_steel_types[z_cols])
z_legendary_bug = helper_functions.z_score(legendary_bug_types[z_cols])
z_legendary_flying = helper_functions.z_score(legendary_flying_types[z_cols])
z_legendary_dragon = helper_functions.z_score(legendary_dragon_types[z_cols])
# ------------------------------------------------------------------------------
# pokemon type z scores (non legendary)
z_non_legendary_fire = helper_functions.z_score(
    non_legendary_fire_types[z_cols])
z_non_legendary_water = helper_functions.z_score(
    non_legendary_water_types[z_cols])
z_non_legendary_grass = helper_functions.z_score(
    non_legendary_grass_types[z_cols])
z_non_legendary_electric = helper_functions.z_score(
    non_legendary_electric_types[z_cols])
z_non_legendary_psychic = helper_functions.z_score(
    non_legendary_psychic_types[z_cols])
z_non_legendary_ghost = helper_functions.z_score(
    non_legendary_ghost_types[z_cols])
z_non_legendary_normal = helper_functions.z_score(
    non_legendary_normal_types[z_cols])
z_non_legendary_fighting = helper_functions.z_score(
    non_legendary_fighting_types[z_cols])
z_non_legendary_ice = helper_functions.z_score(non_legendary_ice_types[z_cols])
z_non_legendary_dark = helper_functions.z_score(
    non_legendary_dark_types[z_cols])
z_non_legendary_fairy = helper_functions.z_score(
    non_legendary_fairy_types[z_cols])
z_non_legendary_poison = helper_functions.z_score(
    non_legendary_poison_types[z_cols])
z_non_legendary_ground = helper_functions.z_score(
    non_legendary_ground_types[z_cols])
z_non_legendary_rock = helper_functions.z_score(
    non_legendary_rock_types[z_cols])
z_non_legendary_steel = helper_functions.z_score(
    non_legendary_steel_types[z_cols])
z_non_legendary_bug = helper_functions.z_score(non_legendary_bug_types[z_cols])
z_non_legendary_flying = helper_functions.z_score(
    non_legendary_flying_types[z_cols])
z_non_legendary_dragon = helper_functions.z_score(
    non_legendary_dragon_types[z_cols])
# ------------------------------------------------------------------------------


# --- Trimming Height Data ---------------------------------------------------------------------------
h2 = heights[(heights > height_trim_low) & (
    heights < height_trim_high)]  # trimmed height
trim_data_h = helper_functions.trim_stats(num_pokemon, num_trim_h, "Pokemon", height_trim_low, height_trim_high,
                                          trimmed_height=True)
# ---------------------------------------------------------------------------------------------------


# --- Trimming Weight Data ---------------------------------------------------------------------------
trim_data_w = helper_functions.trim_stats(num_pokemon, num_trim_w, "Pokemon", weight_trim_low, weight_trim_high,
                                          trimmed_weight=True)
# -----------------------------------------------------------------------------------------------------


# --- Trimming Height and Weight Data ---------------------------------------------------------------------------
trim_data = helper_functions.trim_stats(num_pokemon, num_trim_pokemon, "Pokemon", height_trim_low, height_trim_high,
                                        weight_trim_low, weight_trim_high, trimmed_height=True, trimmed_weight=True)
# ---------------------------------------------------------------------------------------------------------------


# --- Filtering Height Data ------------------------------------------------------
min_freq = 9

height_counts = np.unique(h2, return_counts=True)
# filter heights here, we want their frequency to be more than 5
filtered_heights = np.array(height_counts)[:, height_counts[1] > min_freq]

total_filtered_num = int(filtered_heights[1].sum())

num_removed_filter_h = len(h2) - total_filtered_num

filter_freq_data_stats = pd.Series(filtered_heights[1]).describe()

filter_data = f"{tab * 4}Filtered Pokemon Heights(m).\n" + \
              f"{tab * 5}Removed Heights(m) that occur less than {min_freq}x\n" \
              f'{tab * 5}Removed {num_removed_filter_h} / {len(h2)} = ' + \
              f'{round(((num_removed_filter_h / len(h2)) * 100), 2)}% of cases\n' + \
              f'{tab * 5}{total_filtered_num} Pokemon Remain\n'
# --------------------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# sample constants
# size of pokemon sampled from population
sample_size = 100
# number of times we sample the population
repeat_n = 1000
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# log normal distributions
# normal log scale height
log_h = np.log(heights)
# normal log scale weight
log_w = np.log(weight)
# ------------------------------------------------------------------------------

# # ------------------------------------------------------------------------------
# # basic stats for different sets from the population
# # Pokemon height mean and std dev
# mean_h = height_stats.loc['mean']
# std_dev_h = height_stats.loc['std']
# # Pokemon weight mean and std dev
# mean_w = weight_stats.loc['mean']
# std_dev_w = weight_stats.loc['std']
# # Dragon Type Pokemon height mean and std dev
# mean_dragon_h = stats_dragon_types['height_m'].loc['mean']
# std_dev_dragon_h = stats_dragon_types['height_m'].loc['std']
# # Dragon Type Pokemon weight mean and std dev
# mean_dragon_w = stats_dragon_types['weight_kg'].loc['mean']
# std_dev_dragon_w = stats_dragon_types['weight_kg'].loc['std']
# # ------------------------------------------------------------------------------
#

# -----------------------------------------------------------------------------------------------------------------
# trimmed stat data
fire_trim_data = helper_functions.trim_stats(len(fire_types), len(trimmed_fire_types), "Fire Type Pokemon",
                                             height_trim_low, height_trim_high,
                                             weight_trim_low, weight_trim_high,
                                             trimmed_height=True, trimmed_weight=True)

water_trim_data = helper_functions.trim_stats(len(water_types), len(trimmed_water_types), "Water Type Pokemon",
                                              height_trim_low, height_trim_high,
                                              weight_trim_low, weight_trim_high,
                                              trimmed_height=True, trimmed_weight=True)

grass_trim_data = helper_functions.trim_stats(len(grass_types), len(trimmed_grass_types), "Grass Type Pokemon",
                                              height_trim_low, height_trim_high,
                                              weight_trim_low, weight_trim_high,
                                              trimmed_height=True, trimmed_weight=True)

electric_trim_data = helper_functions.trim_stats(len(electric_types), len(trimmed_electric_types),
                                                 "Electric Type Pokemon",
                                                 height_trim_low, height_trim_high,
                                                 weight_trim_low, weight_trim_high,
                                                 trimmed_height=True, trimmed_weight=True)

normal_trim_data = helper_functions.trim_stats(len(normal_types), len(trimmed_normal_types), "Normal Type Pokemon",
                                               height_trim_low, height_trim_high,
                                               weight_trim_low, weight_trim_high,
                                               trimmed_height=True, trimmed_weight=True)

ground_trim_data = helper_functions.trim_stats(len(ground_types), len(trimmed_ground_types), "Ground Type Pokemon",
                                               height_trim_low, height_trim_high,
                                               weight_trim_low, weight_trim_high,
                                               trimmed_height=True, trimmed_weight=True)

rock_trim_data = helper_functions.trim_stats(len(rock_types), len(trimmed_rock_types), "Rock Type Pokemon",
                                             height_trim_low, height_trim_high,
                                             weight_trim_low, weight_trim_high,
                                             trimmed_height=True, trimmed_weight=True)

steel_trim_data = helper_functions.trim_stats(len(steel_types), len(trimmed_steel_types), "Steel Type Pokemon",
                                              height_trim_low, height_trim_high,
                                              weight_trim_low, weight_trim_high,
                                              trimmed_height=True, trimmed_weight=True)

ice_trim_data = helper_functions.trim_stats(len(ice_types), len(trimmed_ice_types), "Ice Type Pokemon",
                                            height_trim_low, height_trim_high,
                                            weight_trim_low, weight_trim_high,
                                            trimmed_height=True, trimmed_weight=True)

flying_trim_data = helper_functions.trim_stats(len(flying_types), len(trimmed_flying_types), "Flying Type Pokemon",
                                               height_trim_low, height_trim_high,
                                               weight_trim_low, weight_trim_high,
                                               trimmed_height=True, trimmed_weight=True)

fighting_trim_data = helper_functions.trim_stats(len(fighting_types), len(trimmed_fighting_types),
                                                 "Fighting Type Pokemon",
                                                 height_trim_low, height_trim_high,
                                                 weight_trim_low, weight_trim_high,
                                                 trimmed_height=True, trimmed_weight=True)

poison_trim_data = helper_functions.trim_stats(len(poison_types), len(trimmed_poison_types), "Poison Type Pokemon",
                                               height_trim_low, height_trim_high,
                                               weight_trim_low, weight_trim_high,
                                               trimmed_height=True, trimmed_weight=True)

psychic_trim_data = helper_functions.trim_stats(len(psychic_types), len(trimmed_psychic_types),
                                                "Psychic Type Pokemon",
                                                height_trim_low, height_trim_high,
                                                weight_trim_low, weight_trim_high,
                                                trimmed_height=True, trimmed_weight=True)

bug_trim_data = helper_functions.trim_stats(len(bug_types), len(trimmed_bug_types), "Bug Type Pokemon",
                                            height_trim_low, height_trim_high,
                                            weight_trim_low, weight_trim_high,
                                            trimmed_height=True, trimmed_weight=True)

ghost_trim_data = helper_functions.trim_stats(len(ghost_types), len(trimmed_ghost_types), "Ghost Type Pokemon",
                                              height_trim_low, height_trim_high,
                                              weight_trim_low, weight_trim_high,
                                              trimmed_height=True, trimmed_weight=True)

dark_trim_data = helper_functions.trim_stats(len(dark_types), len(trimmed_dark_types), "Dark Type Pokemon",
                                             height_trim_low, height_trim_high,
                                             weight_trim_low, weight_trim_high,
                                             trimmed_height=True, trimmed_weight=True)

dragon_trim_data = helper_functions.trim_stats(len(dragon_types), len(trimmed_dragon_types), "Dragon Type Pokemon",
                                               height_trim_low, height_trim_high,
                                               weight_trim_low, weight_trim_high,
                                               trimmed_height=True, trimmed_weight=True)

fairy_trim_data = helper_functions.trim_stats(len(fairy_types), len(trimmed_fairy_types), "Fairy Type Pokemon",
                                              height_trim_low, height_trim_high,
                                              weight_trim_low, weight_trim_high,
                                              trimmed_height=True, trimmed_weight=True)
# -----------------------------------------------------------------------------------------------------------------


# --- Getting Dragon and Non Dragon Types and collecting their various statistics --
# dragon types
# already have list of all dragon types it is named dragon_types
dragon_type_height = dragon_types['height_m']
dragon_type_weight = dragon_types['weight_kg']
dragon_type_stat_values = dragon_types[cols[16:23]]
n_dragon_type = len(dragon_types)
dragon_heights_sorted = np.sort(dragon_type_height)
d_cdf = scipy.stats.norm.cdf(dragon_heights_sorted)
# non dragon types
not_dragon_type = all_pokemon.loc[(all_pokemon['type_1'] != "Dragon") & (
    all_pokemon['type_2'] != "Dragon")]
not_dragon_type_height = not_dragon_type['height_m']
not_dragon_type_weight = not_dragon_type['weight_kg']
not_dragon_type_stat_values = not_dragon_type[cols[16:23]]
n_not_dragon_type = len(not_dragon_type)
not_dragon_heights_sorted = np.sort(not_dragon_type_height)
n_d_cdf = scipy.stats.norm.cdf(not_dragon_heights_sorted)
# ----------------------------------------------------------------------------------

# ----------------------------------------------------------------------------------
# probabilities of height and weight
# height
prob_h = (np.arange(len(heights)) + 1) / len(heights)
prob_h_stats = pd.Series(prob_h).describe()
# weight
prob_w = (np.arange(len(weight)) + 1) / len(heights)
prob_w_stats = pd.Series(prob_w).describe()
# height prob dragon
prob_h_d = (np.arange(len(dragon_type_height)) + 1) / len(dragon_type_height)
prob_h_d_stats = pd.Series(prob_h_d).describe()
# height prob non dragons
prob_h_nd = (np.arange(len(not_dragon_type_height)) + 1) / \
    len(not_dragon_type_height)
prob_h_nd_stats = pd.Series(prob_h_nd).describe()

# probabilities of trimmed height and weight
# height
prob_h_trim = (np.arange(len(h2)) + 1) / len(h2)
prob_h_trim_stats = pd.Series(prob_h_trim).describe()
# weight
prob_w_trim = (np.arange(
    len(pokemon_trimmed_weights[['weight_kg']])) + 1) / len(pokemon_trimmed_weights)
prob_w_trim_stats = pd.Series(prob_h_trim).describe()
# --------------------------------------------------------------------------------------------------


# --- using different number of bins to display dragon/non dragon height dist --------------------------
b_num = 10
# data for dragons
bin10_d, freq10_d = helper_functions.my_hist_data(
    dragon_type_height, bins=b_num)
bin20_d, freq20_d = helper_functions.my_hist_data(
    dragon_type_height, bins=b_num * 2)
bin30_d, freq30_d = helper_functions.my_hist_data(
    dragon_type_height, bins=b_num * 3)
# data for not dragons
bin10_nd, freq10_nd = helper_functions.my_hist_data(
    not_dragon_type_height, bins=b_num)
bin20_nd, freq20_nd = helper_functions.my_hist_data(
    not_dragon_type_height, bins=b_num * 2)
bin30_nd, freq30_nd = helper_functions.my_hist_data(
    not_dragon_type_height, bins=b_num * 3)
# ------------------------------------------------------------------------------------------------------

import numpy as np
import matplotlib.pyplot as plt

tab: str = "\t"


def plot_hist(data, title='histogram', x_label='bin center', y_label='frequency', c='blue', tc='red',
              is_z_score=False, bins=20):
    plt.xlabel(x_label)
    plt.ylabel(y_label)

    mean_plt = np.mean(data)
    std_plt = np.std(data)

    if is_z_score:
        plt.title(title)

        # plot histogram and return counts containing frequency and bin center data
        plt.hist(data, bins, color=c)
    else:
        plt.title(title)
        # plot histogram and return counts containing frequency and bin center data
        counts = plt.hist(data, bins, color=c)
        # text to be displayed on fig
        str_m = f'mean: {round(mean_plt, 3)}, std: {round(std_plt, 3)}'
        # location of text aligned with second bin center and half max frequency
        plt.annotate(str_m, [counts[1][1], np.max(counts[0]) / 2], color=tc)


def plot_norm_prob(data, y_label='Data', title='Normal Probability Plot'):
    a = np.random.randn(len(data))
    plt.scatter(np.sort(a), np.sort(data))
    plt.xlabel('Standard Normal')
    plt.ylabel(y_label)
    plt.title(title)


def plot_cdf(data, title="CDF", x_label='x', y_label='prob(value $\leq$ x)'):
    x_cdf = np.sort(data)
    size = len(data)
    y_cdf = (1 + np.arange(size)) / size
    plt.plot(x_cdf, y_cdf)
    plt.xlabel(x_label)
    plt.ylabel(y_label)  # between $$ is latex math mode
    plt.title(title)
    return x_cdf, y_cdf


def my_hist_data(data, bins=20):
    counts = plt.hist(data, bins)
    plt.close()
    bin_center_hist = (counts[1][1:] + counts[1][:-1]) / 2
    freq = counts[0] / len(data)
    return bin_center_hist, freq


def z_score(data):
    m = np.mean(data)
    s = np.std(data)

    return (data - m) / s


def corr_compute(x, y, x_label='x', y_label='y', modified=""):
    # corr x / y
    # compute pearson correlation coefficient
    pcc = x.corr(y, method='pearson')
    # compute spearman correlation coefficient
    scc = x.corr(y, method='spearman')
    # compute kendal correlation coefficient
    kcc = x.corr(y, method='kendall')

    corr_data = f"{tab * 4}Corelation between {x_label} and {y_label} {modified}\n" + \
                f"{tab * 5}Pearson CC = {round(pcc, 2)}\n" + \
                f"{tab * 5}Spearman CC = {round(scc, 2)}\n" + \
                f"{tab * 5}Kendall CC = {round(kcc, 2)}\n"
    return corr_data


def basic_stats_string(x_stats, x_label='x'):
    # output string
    stats_string = f"{tab * 4}{x_label} Statistics:\n" \
                   f"{tab * 5}Standard Deviation: {round(x_stats.loc['std'], 2)}\n" + \
                   f"{tab * 5}Mean: {round(x_stats.loc['mean'], 2)}\n" + \
                   f"{tab * 5}Min: {round(x_stats.loc['min'], 2)}\n" + \
                   f"{tab * 5}Max: {round(x_stats.loc['max'], 2)}\n"
    return stats_string


def data_set_stats(pokemon_data_set, name="Pokemon", total_attr=20, study_attr=9, cols=[], z_cols=[]):
    pokemon_set_data = f"{tab * 4}{name} Characteristics\n" + \
                       f"{tab * 5}Number of {name}: {len(pokemon_data_set)}\n" \
                       f"{tab * 5}Number of Attributes Total: {total_attr}\n" + \
                       f"{tab * 5}Number of Attributes in the Study: {study_attr}\n\n\n" + \
                       f"{tab * 10}- - - Attribute in study Information - - -\n\n"
    for col in cols:
        if col in z_cols:
            pokemon_set_data += f"{tab * 8}* {col}\n"

    return pokemon_set_data


def trim_stats(initial, trimmed, name='Pokemon', height_low=0, height_high=0, weight_low=0, weight_high=0, trimmed_height=False, trimmed_weight=False):
    trim_data = f"{tab * 4}Trimmed extreme Height(m) and Weight(kg) from {name} data!\n"

    if trimmed_height:
        trim_data += f'{tab * 5}min height = {height_low}(m), max height = {height_high}(m)\n'
    if trimmed_weight:
        trim_data += f'{tab * 5}min weight = {weight_low}(kg), max weight = {weight_high}(kg)\n'

    trim_data += f'{tab * 5}Removed {initial - trimmed} / {initial} = ' + \
                 f'{round(((initial - trimmed) / initial) * 100, 2)}%' \
                 f' of cases\n' + \
                 f'{tab * 5}{trimmed} Pokemon Remain\n'

    return trim_data

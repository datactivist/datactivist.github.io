# Directives d'installation de R

Installer R, quel que soit la plateforme utilisée, est a priori simple. Certaines petites astuces peuvent toutefois être utiles.

## Sous Ubuntu

Le plus simple est d'installer R en ligne de commande. Attention, il faut connaître le nom de code de votre version d'Ubuntu (Xenial est la 16.04 ; Trusty est la 14.04 et Yakkety est la 16.10), et le cas échéant remplacer xenial dans les instructions ci-dessous par le nom de code adéquat.

```bash
sudo add-apt-repository "deb https://cran.rstudio.com/bin/linux/ubuntu xenial/"
sudo add-apt-repository "deb http://fr.archive.ubuntu.com/ubuntu xenial-backports main restricted universe"
sudo apt-get update
sudo apt-get install r-base r-base-dev
```
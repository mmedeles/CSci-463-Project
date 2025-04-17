#  Database Setup Guide for CSci-463-Project

This guide walks you through setting up a **MariaDB** database and connecting it to the Symfony backend using **HeidiSQL**.

---

## Overview

We what did:

- Install and configure MariaDB
- Use HeidiSQL to create a database
- Connect Symfony to the database using Doctrine
- Generate tables from Symfony entities

---

## Requirements

| Tool       | Notes                            |
|------------|----------------------------------|
| MariaDB    | Install from https://mariadb.org |
| HeidiSQL   | Download from https://heidisql.com |
| Symfony    | Backend must be installed        |
| Composer   | PHP package manager              |

---

## Create the Database with HeidiSQL

1. Open **HeidiSQL**
2. Connect to your local MariaDB instance (localhost, port 3306)
3. Click **"New → Create Database"**
   - Name: `csci463_project`
   - Collation: `utf8mb4_general_ci`

---

## Configure Symfony Connection

In your `server/.env.local`, add:

```env
DATABASE_URL="mysql://root:your_password@127.0.0.1:3306/csci463_project"
```

> Replace `root` and `your_password` with your MariaDB login.

---

## Install Doctrine (if not already)

From inside the `server/` folder:

```bash
composer require symfony/orm-pack
composer require --dev symfony/maker-bundle
```

---

## Generate Your First Entity

```bash
php bin/console make:entity
```

---

## Create and Sync the Database

```bash
php bin/console doctrine:database:create
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

> Check HeidiSQL — tables should now appear under `csci463_project`.

---

## Test Checklist

| Task                             | Done |
|----------------------------------|------|
| Database created in HeidiSQL     | ✅   |
| `.env.local` updated             | ✅   |
| Doctrine installed               | ✅   |
| Migration successful             | ✅   |
| Tables visible in HeidiSQL       | ✅   |

---


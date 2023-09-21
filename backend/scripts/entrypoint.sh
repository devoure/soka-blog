#!/bin/sh

# End script in case of error
set -e

# Collect all static file and put them in root staic file
python manage.py collectstatic --noinput

# Start uwsgi server server
# --socket runs as TCP socker
# :8000 port
# --master run as master server in the foreground
# --enable-threads allow multithreading
# --module entrypoint definition
uwsgi --socket :8000 --master --enable-threads --module blog.wsgi

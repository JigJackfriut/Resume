all: PutHTML

PutHTML:
        cp resume.html /var/www/html/Resume/
        cp resume.css /var/www/html/Resume/
        cp resume.js /var/www/html/Resume/
        cp page1.html   /var/www/html/Resume/
        cp page2.html /var/www/html/Resume/

        echo "Current contents of your HTML directory: "
        ls -l /var/www/html/Resume

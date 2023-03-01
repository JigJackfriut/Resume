all: PutHTML

PutHTML:
	cp resume.html /var/www/html/Resume/
	cp resume.css /var/www/html/Resume/
	cp resume.js /var/www/html/Resume/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/solardemo

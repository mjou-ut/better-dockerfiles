build:
	docker build -t test-alpine -f alpine.Dockerfile .
	docker build -t test-bullseye -f bullseye-slim.Dockerfile .

run:
	@echo "\nRUNNING ALPINE TEST"
	@docker run -it --rm test-alpine
	@echo "\n\n\nRUNNING DEBIAN SLIM TEST"
	@docker run -it --rm test-bullseye

clean:
	docker rmi test-alpine test-bullseye

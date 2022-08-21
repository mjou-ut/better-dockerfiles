build:
	docker build -t test-alpine -f alpine.Dockerfile .
	docker build -t test-bullseye -f bullseye-slim.Dockerfile .

run:
	@echo "\nRunning alpine test"
	@docker run -it --rm test-alpine
	@echo "\n\n\nRunning debian slim test"
	@docker run -it --rm test-bullseye

clean:
	docker rmi test-alpine test-bullseye

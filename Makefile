build:
	docker build -t test-alpine -f alpine.Dockerfile .
	docker build -t test-bullseye -f bullseye-slim.Dockerfile .
	docker build -t test-bun -f bun.Dockerfile .

run:
	@echo "\nRUNNING ALPINE TEST"
	@docker run -it --rm test-alpine
	@echo "\n\n\nRUNNING DEBIAN SLIM TEST"
	@docker run -it --rm test-bullseye
	@echo "\n\n\nRUNNING on BUN (it should crash)"
	@docker run -it --rm test-bun

clean:
	docker rmi test-alpine test-bullseye test-bun
